import { ref } from "vue";

interface Doodle extends HTMLElement {
  update: () => null;
}

export const useDoodle = () => {
  const doodle = ref<Doodle>();
  const isBackgroundActive = ref(false);
  let doodleIntervalID: number;

  const toggleBackgroundDoodle = () => {
    isBackgroundActive.value = true;
  };

  const updateDoodle = () => {
    doodleIntervalID = setInterval(() => {
      doodle.value?.update();
    }, 1500);

    doodle.value?.update();
  };

  const clearDoodle = () => {
    clearInterval(doodleIntervalID);
  };

  return {
    doodle,
    isBackgroundActive,
    toggleBackgroundDoodle,
    updateDoodle,
    clearDoodle,
  };
};
