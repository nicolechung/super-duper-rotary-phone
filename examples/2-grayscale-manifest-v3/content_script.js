(function () {
  /**
   * We only want to run this one time
   * Otherwise you will have multiple style tags on the page
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  let style = document.createElement("style");
  document.body.appendChild(style);

  browser.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && "value" in changes) {
      // newValue is part of the storage api
      // https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent
      update(changes.value.newValue);
    }
  });

  function update(value) {
    style.innerText = `html { filter: grayscale(${value}%) !important } `;
  }

  browser.storage.local.get().then((result) => update(result.value));
})();
