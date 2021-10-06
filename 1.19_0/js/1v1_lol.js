var gameInstance = UnityLoader.instantiate("gameContainer", "/WebGL.json", {
    onProgress: UnityProgress,
    Module: {
        onRuntimeInitialized: function () {
            UnityProgress(gameInstance, "complete")
        }
    }
});
document.getElementsByClassName('fullscreen')[0].addEventListener('click', function (){
    gameInstance.SetFullscreen(1)
})