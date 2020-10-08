<template>
  <div class="durm_kit_bg">
    <div class="keys">
      <div data-key="65" class="key">
        <kbd>A</kbd>
        <span class="sound">clap</span>
      </div>
      <div data-key="83" class="key">
        <kbd>S</kbd>
        <span class="sound">hihat</span>
      </div>
      <div data-key="68" class="key">
        <kbd>D</kbd>
        <span class="sound">kick</span>
      </div>
      <div data-key="70" class="key">
        <kbd>F</kbd>
        <span class="sound">openhat</span>
      </div>
      <div data-key="71" class="key">
        <kbd>G</kbd>
        <span class="sound">boom</span>
      </div>
      <div data-key="72" class="key">
        <kbd>H</kbd>
        <span class="sound">ride</span>
      </div>
      <div data-key="74" class="key">
        <kbd>J</kbd>
        <span class="sound">snare</span>
      </div>
      <div data-key="75" class="key">
        <kbd>K</kbd>
        <span class="sound">tom</span>
      </div>
      <div data-key="76" class="key">
        <kbd>L</kbd>
        <span class="sound">tink</span>
      </div>
    </div>

    <audio data-key="65" src="@/assets/sounds/clap.wav"></audio>
    <audio data-key="83" src="@/assets/sounds/hihat.wav"></audio>
    <audio data-key="68" src="@/assets/sounds/kick.wav"></audio>
    <audio data-key="70" src="@/assets/sounds/openhat.wav"></audio>
    <audio data-key="71" src="@/assets/sounds/boom.wav"></audio>
    <audio data-key="72" src="@/assets/sounds/ride.wav"></audio>
    <audio data-key="74" src="@/assets/sounds/snare.wav"></audio>
    <audio data-key="75" src="@/assets/sounds/tom.wav"></audio>
    <audio data-key="76" src="@/assets/sounds/tink.wav"></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DurmKits'
});
</script>

<style lang="less" scoped>
.durm_kit_bg {
  font-size: 10px;
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
}

.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: url(https://static.ikmoons.com/blogs/image/unnamed.jpg) bottom center;
  background-size: cover;
}

.key {
  border: 4px solid black;
  border-radius: 5px;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  transition: all 0.07s;
  width: 100px;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 5px black;
}

.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 10px #ffc600;
}

kbd {
  display: block;
  font-size: 40px;
}

.sound {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffc600;
}
</style>
