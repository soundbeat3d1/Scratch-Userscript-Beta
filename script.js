// ==UserScript==
// @name         Scratch Mod Menu
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  aka. Scratch Userscript
// @author       soundbeat3d1
// @match        https://scratch.mit.edu/*
// @icon         https://seeklogo.com/images/S/scratch-logo-B13B10E544-seeklogo.com.png
// @grant        none
// ==/UserScript==

// Create Mod Menu Div part 1
const modmenu1 = document.createElement('div')
modmenu1.innerHTML = `<p style="color: white; text-align: center;">Scratch Mod Menu</p><button onclick="location.href=location.href">Refresh Scratch</button><button onclick="destroynow();">Destroy Scratch (Client)</button>
<p style="color: white;">For This Project:</p><button onclick="setUnlimited();">Unlimited ❤ & ⭐ (Client)</button><br>`
document.body.appendChild(modmenu1);

// Create Mod Menu Div part 1 (Scripts)
const modmenu1scripts = document.createElement('script')
modmenu1scripts.innerHTML = `function destroynow() {const destroyelement = document.getElementById('app'); destroyelement.parentNode.removeChild(destroyelement);}; function setUnlimited() {const loves = document.getElementsByClassName('project-loves');
const lovesfavorited = document.getElementsByClassName('project-loves loved'); const favorites = document.getElementsByClassName('project-favorites'); const favoritesfavorited = document.getElementsByClassName('project-favorites favorited');
loves[0].innerHTML = '999999999'; favorites[0].innerHTML = '999999999'; lovesfavorited[0].innerHTML = '999999999'; favoritesfavorited[0].innerHTML = '999999999';};`
document.body.appendChild(modmenu1scripts);

// Create Mod Menu Div part 2
const modmenu2 = document.createElement('button')
modmenu2.textContent = 'See Modded (Cheats) [DISABLED]'
modmenu2.disabled = 'true'
document.body.appendChild(modmenu2)

// Mod For Minecraft
if (location.href == `https://scratch.mit.edu/projects/10128407/`) {
    modmenu2.parentNode.removeChild(modmenu2)
    const minecraft = document.createElement('span')
    minecraft.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937396147/'">See Modded (Cheats)</button>`
    document.body.appendChild(minecraft)
}

// Mod For Minecraft (Platformer)
if (location.href == `https://scratch.mit.edu/projects/878465277`) {
    modmenu2.parentNode.removeChild(modmenu2)
    const minecraftplatformer = document.createElement('span')
    minecraftplatformer.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/986714995/'">See Modded (Cheats)</button>`
    document.body.appendChild(minecraftplatformer)
}

// Mod For Roblox
if (location.href == 'https://scratch.mit.edu/projects/236106256') {
    modmenu2.parentNode.removeChild(modmenu2)
    const roblox = document.createElement('span')
    roblox.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937431934/'">See Modded (Cheats)</button>`
    document.body.appendChild(roblox)
}

// Mod For Ball Blast
if (location.href == 'https://scratch.mit.edu/projects/472077983') {
    modmenu2.parentNode.removeChild(modmenu2)
    const ballblast = document.createElement('span')
    ballblast.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937721458/'">See Modded (Cheats)</button>`
    document.body.appendChild(ballblast)
}

// Mod For City Simulator
if (location.href == 'https://scratch.mit.edu/projects/421467407') {
    modmenu2.parentNode.removeChild(modmenu2)
    const citysimulator = document.createElement('span')
    citysimulator.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937798890/'">See Modded (Cheats)</button>`
    document.body.appendChild(citysimulator)
}

// Mod For Fortnite Z
if (location.href == 'https://scratch.mit.edu/projects/404950182') {
    modmenu2.parentNode.removeChild(modmenu2)
    const fortnitez = document.createElement('span')
    fortnitez.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937805503/'">See Modded (Cheats)</button>`
    document.body.appendChild(fortnitez)
}

// Mod For Flappy Bird
if (location.href == 'https://scratch.mit.edu/projects/18262469') {
    modmenu2.parentNode.removeChild(modmenu2)
    const flappybird = document.createElement('span')
    flappybird.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/971565130/'">See Modded (Cheats)</button>`
    document.body.appendChild(flappybird)
}

// Mod For Geometry Dash
if (location.href == 'https://scratch.mit.edu/projects/105500895') {
    modmenu2.parentNode.removeChild(modmenu2)
    const geometrydash = document.createElement('span')
    geometrydash.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/971578213/'">See Modded (Cheats)</button>`
    document.body.appendChild(geometrydash)
}


// (Old) Version v0.1 Scratch Mod Menu
/*
// Mod Menu Name Text
const modmenu = document.createElement('p')
modmenu.textContent = 'Scratch Mod Menu'
modmenu.style.color = 'white'
modmenu.style.textAlign = 'center'
document.body.appendChild(modmenu)

// Refresh Scratch Button
const refresh = document.createElement('span')
refresh.innerHTML = `<button onclick="location.href=location.href">Refresh Scratch</button>`
document.body.appendChild(refresh)

// Destroy Scratch Button (Client-side)
const destroy = document.createElement('span')
destroy.innerHTML = `<button onclick="destroynow();">Destroy Scratch (Client)</button>`
document.body.appendChild(destroy)

// Destroy Scratch Script (Client-side)
const destroyscript = document.createElement('script')
destroyscript.textContent = `
function destroynow() {
    const destroyelement = document.getElementById('app')
    destroyelement.parentNode.removeChild(destroyelement)
}
`
document.body.appendChild(destroyscript)

// For This Project Text
const forthisproject = document.createElement('p')
forthisproject.textContent = 'For This Project:'
forthisproject.style.color = 'white'
document.body.appendChild(forthisproject)

// Unlimited ❤ & ⭐ Button (Client-side)
const unlimited = document.createElement('span')
unlimited.innerHTML = `<button onclick="setUnlimited();">Unlimited ❤ & ⭐ (Client)`
document.body.appendChild(unlimited)

// Unlimited ❤ & ⭐ Script (Client-side)
const unlimitedscript = document.createElement('script')
unlimitedscript.textContent = `
function setUnlimited() {
    const loves = document.getElementsByClassName('project-loves')
    const lovesfavorited = document.getElementsByClassName('project-loves loved')
    const favorites = document.getElementsByClassName('project-favorites')
    const favoritesfavorited = document.getElementsByClassName('project-favorites favorited')
    loves[0].innerHTML = '999999999'
    favorites[0].innerHTML = '999999999'
    lovesfavorited[0].innerHTML = '999999999'
    favoritesfavorited[0].innerHTML = '999999999'
}
`
document.body.appendChild(unlimitedscript)

// New Line
const br1 = document.createElement('br')
document.body.appendChild(br1)

// If there's no mod in the project
const disabled = document.createElement('button')
disabled.textContent = 'See Modded (Cheats) [DISABLED]'
disabled.disabled = 'true'
document.body.appendChild(disabled)

// Mod For Minecraft
if (location.href == `https://scratch.mit.edu/projects/10128407/`) {
    disabled.parentNode.removeChild(disabled)
    const minecraft = document.createElement('span')
    minecraft.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937396147/'">See Modded (Cheats)</button>`
    document.body.appendChild(minecraft)
}

// Mod For Minecraft (Platformer)
if (location.href == `https://scratch.mit.edu/projects/878465277`) {
    disabled.parentNode.removeChild(disabled)
    const minecraftplatformer = document.createElement('span')
    minecraftplatformer.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/986714995/'">See Modded (Cheats)</button>`
    document.body.appendChild(minecraftplatformer)
}

// Mod For Roblox
if (location.href == 'https://scratch.mit.edu/projects/236106256') {
    disabled.parentNode.removeChild(disabled)
    const roblox = document.createElement('span')
    roblox.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937431934/'">See Modded (Cheats)</button>`
    document.body.appendChild(roblox)
}

// Mod For Ball Blast
if (location.href == 'https://scratch.mit.edu/projects/472077983') {
    disabled.parentNode.removeChild(disabled)
    const ballblast = document.createElement('span')
    ballblast.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937721458/'">See Modded (Cheats)</button>`
    document.body.appendChild(ballblast)
}

// Mod For City Simulator
if (location.href == 'https://scratch.mit.edu/projects/421467407') {
    disabled.parentNode.removeChild(disabled)
    const citysimulator = document.createElement('span')
    citysimulator.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937798890/'">See Modded (Cheats)</button>`
    document.body.appendChild(citysimulator)
}

// Mod For Fortnite Z
if (location.href == 'https://scratch.mit.edu/projects/404950182') {
    disabled.parentNode.removeChild(disabled)
    const fortnitez = document.createElement('span')
    fortnitez.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937805503/'">See Modded (Cheats)</button>`
    document.body.appendChild(fortnitez)
}

// Mod For Flappy Bird
if (location.href == 'https://scratch.mit.edu/projects/18262469') {
    disabled.parentNode.removeChild(disabled)
    const flappybird = document.createElement('span')
    flappybird.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/971565130/'">See Modded (Cheats)</button>`
    document.body.appendChild(flappybird)
}

// Mod For Geometry Dash
if (location.href == 'https://scratch.mit.edu/projects/105500895') {
    disabled.parentNode.removeChild(disabled)
    const geometrydash = document.createElement('span')
    geometrydash.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/971578213/'">See Modded (Cheats)</button>`
    document.body.appendChild(geometrydash)
}
*/
