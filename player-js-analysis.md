1. This file declares a class, `Player`, instantiates it, and assigns it to a global `player` variable.
2. The `Player` class contains four methods:
    - `constructor()`
    - `playPause()`
    - `skipTo()`
    - `setVolume()`
3. The `constructor()` method sets initial values for the `currentlyPlaying`, `playState`, `volume`, and `soundObject` properties.
    - `currentlyPlaying` is set to the first item in `album.songs`.
    -  The initial `playState` is `"stopped"`.
    -  The `volume` is set to the number `80`.
    -  The `soundObject` instantiates a new `buzz.sound` object using the `soundFileUrl` property of `this.currentlyPlaying`. The `buzz` variable doesn't appear to be initialized here, so presumably it's a dependency loaded elsewhere.
4. The `playPause()` method accepts one parameter, `song`. It sets it to `this.currentlyPlaying` by default. It checks to see if `this.currentlyPlaying` is different from `song`, and if so, it:
    - Stops the `soundObject` property.
    - Removes the `"playing"` and `"paused"` classes from the `element` property of `this.currentlyPlaying`.
    - Sets `this.currentlyPlaying` to the function's parameter, `song`.
    - Changes the `playState` property to `"stopped"`.
    - Instantiates a new sound object using `this.currentlyPlaying`, which was just updated to `song`.

    If `this.currentlyPlaying` is paused or stopped, it:
    - Sets volume to the `this.soundObject` property by accepting one parameter `this.volume`.
    - Plays the `soundObject` property.
    - Changes the `playState` property to `"playing"`.
    - Removes the `"paused"` class and adds the `"playing"` class from the `element` property of `this.currentlyPlaying`.

    If `this.currentlyPlaying` is a `song`:
    - Pauses the `soundObject` property.
    - Changes the `playState` property to `"paused"`.
    - Removes the `"playing"` class and adds the `"paused"` class from the `element` property of `this.currentlyPlaying`.
5. The `skipTo()` method accepts one parameter, `percent`. It checks to see if `this.playState` is not `playing`, and if so, it returns and exits.
    - So if `this.playState` is `playing`:
    Sets time to ( (percent / 100) times duration of the `this.soundObject`) of the `this.soundObject`.
6. The `setVolume()` method accepts one parameter, `percent`.
    - Sets `this.volume` to percent.
    - Sets volume to the `this.soundObject` property by accepting one parameter `percent`.
7. `const player` is equal to the `new Player()`, an instance of a player.
