import renderChart from "./renderchart.js";
const Charts=renderChart()

const App = () => {
  const _ui = {};
  const _state = new Proxy(
    {},
    {
      set(targer, prop, val) {
        if (targer[prop] !== val) {
          targer[prop] = val;
          if (render[prop]) render[prop](val);
        }
        return true;
      },
    }
  );
  const render = {};




  function handleAddEventListener() {}
  function init() {
    handleAddEventListener();
    Charts.renderChart1()
    Charts.renderChart2()
    Charts.renderChart3()
    Charts.renderChart4()
    Charts.renderChart5()
    Charts.renderChart6()
    Charts.renderChart7()
    Charts.renderChart8()
  }
  return { init };
};
export default App;
document.addEventListener("DOMContentLoaded", () => {
  const app = App();
  app.init();
});
