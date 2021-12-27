let input = document.querySelector('input');
input.addEventListener('change', e => setValue(e.target.value));

async function setValue(value) {
  await browser.storage.local.set({value})
}

async function init() {
  let {value} = await browser.storage.local.get();
  if (!value) {
    value = 0
  }
  input.value = value;
  setValue(value);
}

init().catch(e => console.log(e));

