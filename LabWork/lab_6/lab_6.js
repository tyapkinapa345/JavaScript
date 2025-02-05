const csvUrl = 'https://gist.githubusercontent.com/juandes/2f1ffa32dd4e58f9f5825eca1806244b/raw/c5b387382b162418f051fd83d89fddb4067b91e1/steps_distance_df.csv';
// Local version of the dataset
// const csvUrl = 'steps_distance_df.csv'
const dataSurface = { name: 'Steps and Distance Scatterplot', tab: 'Data' };
const fittedSurface = { name: 'Fitted Dataset', tab: 'Data' };
const dataToVisualize = [];
const predictionsToVisualize = [];

let csvDataset;
let model;

async function defineAndTrainModel(numberEpochs) {
  // Make sure the tfjs-vis visor is open.
  tfvis.visor().open();

  // numOfFeatures is the number of column or features minus the label column
  const numOfFeatures = (await csvDataset.columnNames()).length - 1;

  // Convert the features (xs) and labels (ys) to an array
  const flattenedDataset = csvDataset
    .map(({ xs, ys }) => ({ xs: Object.values(xs), ys: Object.values(ys) }))
    .batch(32);

  // Define the model.
  // Note that there's no activation function because we want
  // a linear relationship
  model = tf.sequential();
  model.add(tf.layers.dense({
    inputShape: [numOfFeatures],
    units: 1,
  }));

  model.compile({
    optimizer: tf.train.adam(0.1),
    loss: tf.losses.meanSquaredError,
    metrics: ['mse'], // Also mean squared error
  });

  // Fit the model using the prepared Dataset
  const history = await model.fitDataset(flattenedDataset, {
    epochs: numberEpochs,
    // Here we want to show on the tfvis visor the loss
    // and mse metric and update it after every epoch.
    callbacks: [
      tfvis.show.fitCallbacks(
        { name: 'Loss и MSE', tab: 'Training' },
        ['loss', 'mse'],
        { callbacks: ['onEpochEnd'] },
      ),
      {
        // Let's also print the loss to the console
        onEpochEnd: async (epoch, logs) => {
          console.log(`${epoch}:${logs.loss}`);
        },
      }],
  });

  // Print the history, model's summary, and weights
  console.log(history);
  drawFittedLine(0, 30000, 500);

  model.summary();
  console.log(`Model weights:\n ${model.getWeights()}`);

  // Get the "predict" button and make it able to perform predictions
  const predictBtn = document.getElementById('predict-btn');
  predictBtn.disabled = false;
}

async function loadData() {
  // Our target variable (what we want to predict) is the the column 'distance'
  // so we add it to the configuration as the label
  csvDataset = tf.data.csv(
    csvUrl, {
      columnConfigs: {
        distance: {
          isLabel: true,
        },
      },
    },
  );


  await csvDataset.forEachAsync((e) => {
    dataToVisualize.push({ x: e.xs.steps, y: e.ys.distance });
  });

  tfvis.render.scatterplot(dataSurface, { values: [dataToVisualize], series: ['Dataset'] });
}

function createLoadPlotButton() {
  const btn = document.createElement('BUTTON');
  btn.innerText = 'Загрузить и визуализировать данные';
  btn.id = 'load-plot-btn';

  // Listener that waits for clicks.
  // Once a click is done, it will execute the function
  btn.addEventListener('click', () => {
    loadData();
    const trainBtn = document.getElementById('train-btn');
    trainBtn.disabled = false;
  });


  document.querySelector('#load-plot').appendChild(btn);
}

function createTrainButton() {
  const btn = document.createElement('BUTTON');
  btn.innerText = 'Обучить!';
  btn.disabled = true;
  btn.id = 'train-btn';

  // Listener that waits for clicks.
  // Once a click is done, it will execute the function
  btn.addEventListener('click', () => {
    const numberEpochs = document.getElementById('number-epochs').value;
    defineAndTrainModel(parseInt(numberEpochs, 10));
  });

  document.querySelector('#train-div').appendChild(btn);
}

function drawFittedLine(min, max, steps) {
  // Empty the array in case the user trains more than once.
  const fittedLinePoints = [];
  const predictors = Array.from(
    { length: (max - min) / steps + 1 },
    (_, i) => min + (i * steps),
  );

  const predictions = model.predict(tf.tensor1d(predictors)).dataSync();

  predictors.forEach((value, i) => {
    fittedLinePoints.push({ x: value, y: predictions[i] });
  });

  const structureToVisualize = {
    values: [dataToVisualize, fittedLinePoints],
    series: ['1. Данные обучения', '2. Полученная зависимость'],
  };

  tfvis.render.scatterplot(fittedSurface, structureToVisualize);
}

function createPredictionInput() {
  const input = document.createElement('input');
  input.type = 'number';
  input.id = 'predict-input';
  input.placeholder = 'Введите количество шагов';

  document.querySelector('#predict').appendChild(input);
}

function createPredictionOutputParagraph() {
  const p = document.createElement('p');
  p.id = 'predict-output-p';

  document.querySelector('#predict').appendChild(p);
}

function createExpectedValueInput() {
  const label = document.createElement('label');
  label.innerText = 'Ожидаемое расстояние:';
  label.setAttribute('for', 'expected-value-input');

  const input = document.createElement('input');
  input.type = 'number';
  input.id = 'expected-value-input';
  input.placeholder = 'Введите ожидаемое расстояние';

  const container = document.querySelector('#predict');
  container.appendChild(label);
  container.appendChild(input);
}

function createDifferenceOutput() {
  const container = document.createElement('div');
  container.className = 'difference-output-container'; // Добавляем класс для контейнера

  const differenceLabel = document.createElement('span'); // Элемент для текста "Разница:"
  differenceLabel.innerText = 'Разница: '; // Текст "Разница:"
  
  const differenceIndicator = document.createElement('div'); // Индикатор разницы
  differenceIndicator.id = 'difference-indicator';
  differenceIndicator.style.padding = '5px';
  differenceIndicator.style.border = '1px solid black';
  differenceIndicator.style.borderRadius = '5px';
  differenceIndicator.style.display = 'inline-block'; // Чтобы индикатор отображался рядом с текстом
  differenceIndicator.innerText = '-'; // Начальный текст (значение разницы)

  container.appendChild(differenceLabel); // Добавляем текст "Разница:" в контейнер
  container.appendChild(differenceIndicator); // Добавляем индикатор разницы в контейнер

  document.querySelector('#predict').appendChild(container);
}

function createQualityIndicator() {
  const indicatorText = document.createElement('div');
  indicatorText.id = 'quality-indicator';
  indicatorText.style.marginTop = '10px';
  
  // Устанавливаем начальный текст индикатора качества
  indicatorText.innerText = 'Качество предсказания: -'; 
  document.querySelector('#predict').appendChild(indicatorText);
}

function updateQualityIndicator(difference) {
  const indicatorText = document.getElementById('quality-indicator');
  const differenceIndicator = document.getElementById('difference-indicator');
  const absDifference = Math.abs(difference);

  // Обновляем текст индикатора разницы
  differenceIndicator.innerText = `${difference.toFixed(2)}`; // Устанавливаем только значение разницы

  // Обновляем цвет и текст индикатора качества
  if (absDifference < 1) {
    differenceIndicator.style.backgroundColor = '#7dde41'; // Отличное предсказание
    indicatorText.innerText = 'Качество предсказания: Отличное';
  } else if (absDifference < 5) {
    differenceIndicator.style.backgroundColor = '#dbde41'; // Приемлемое предсказание
    indicatorText.innerText = 'Качество предсказания: Приемлемое';
  } else {
    differenceIndicator.style.backgroundColor = '#de4141'; // Большая ошибка
    indicatorText.innerText = 'Качество предсказания: Большая ошибка';
  }
}

function createPredictButton() {
  const btn = document.createElement('button');
  btn.innerText = 'Прогноз!';
  btn.disabled = true;
  btn.id = 'predict-btn';

  btn.addEventListener('click', () => {
      const steps = document.getElementById('predict-input').value;
      const stepsParsed = parseInt(steps, 10);

      const expectedValue = document.getElementById('expected-value-input').value;
      const expectedParsed = parseFloat(expectedValue);

      const prediction = model.predict(tf.tensor1d([stepsParsed])).dataSync();
      const difference = expectedParsed - prediction[0];

      document.getElementById('predict-output-p').innerText = `Предсказанное расстояние: ${prediction[0].toFixed(2)}`;

      updateQualityIndicator(difference);
      
      predictionsToVisualize.push({ x: stepsParsed, y: prediction[0] });
      const structureToVisualize = {
          values: [dataToVisualize, predictionsToVisualize],
          series: ['1. Данные обучения', '2. Прогнозы'],
      };

      tfvis.render.scatterplot(dataSurface, structureToVisualize);
      tfvis.visor().setActiveTab('Data');
  });

  document.querySelector('#predict').appendChild(btn);
}

function init() {
  createLoadPlotButton();
  createTrainButton();
  createPredictionInput();
  createExpectedValueInput();
  createPredictButton();
  createPredictionOutputParagraph();
  createDifferenceOutput();
  createQualityIndicator();
}

init();
