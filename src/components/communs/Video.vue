<template>
  <div class="content-video">
    <div class="player">
      <video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        data-setup="{}"
      >
        <source
          :src="`http://20.45.41.19${data.url}`"
          type="video/mp4"
        />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
        </p>
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: { data: Object, poster: String},
};
</script>

<style scoped>
.content-video {
  width: 100%;
  height: 100%;
}
.player {
  /* position: absolute !important; */
  width: 100%;
  height: 100%;
}

.video-js {
  height: 100% !important;
  width: 100% !important;
}

.vjs-custom-skin /deep/ .video-js {
  width: 100%;
  height: auto;
}

.vjs-custom-skin /deep/ .video-js .vjs-tech {
  position: initial;
  width: 100%;
  height: 100%;
}

.vjs-custom-skin /deep/ .video-js .vjs-big-play-button {
  position: absolute;
  top: 45%;
  left: 45%;
}
</style>
