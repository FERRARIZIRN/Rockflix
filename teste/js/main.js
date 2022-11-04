$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

var x = document.getElementById("musica");

function mouseOver() {
    x.play();
}

function openModal(mn) {
    let modal = document.getElementById(mn)

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';


}
function closeModal(mn) {
    let modal = document.getElementById(mn)

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = '';




}

var myVideo = document.querySelector("#video")

function playPause() {
    if (myVideo.paused)
        myVideo.play()
    else
        myVideo.pause()


}
//botoes//


let ymetallica = " https://www.youtube.com/channel/UCbulh9WdLtEXiooRcYK7SWw"
let smetallica = " https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB"
let aeroy = " https://www.youtube.com/channel/UCBxdHQVOaZhUOIj_3gt2FYw"
let aeros = " https://open.spotify.com/artist/7Ey4PD4MYsKc5I2dolUwbH"
let slipy = " https://www.youtube.com/user/slipknot"
let slips = "  https://open.spotify.com/artist/05fG473iIaoy82BF1aGhL8"
let nighty = " https://www.youtube.com/channel/UCQplaZZ2mv8fo8Zd-1hQPzg"
let nights = " https://open.spotify.com/artist/2NPduAUeLVsfIauhRwuft1"
let evay = " https://www.youtube.com/channel/UCJeH7gl6PbDVV4DTldIOPOA"
let evas = " https://open.spotify.com/artist/5nGIFgo0shDenQYSE0Sn7c"
let withey = " https://www.youtube.com/c/WhitesnakeTV"
let withes = " https://open.spotify.com/artist/3UbyYnvNIT5DFXU4WgiGpP"
let sisy = " https://www.youtube.com/channel/UC7-YMmnc0ppcWmio8t1WdcA"
let siss = " https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
let scorpy = " https://www.youtube.com/channel/UCcvnDgwSH5Dl2b3Bxfz4OCQ"
let scorps = " https://open.spotify.com/artist/27T030eWyCQRmDyuvr1kxY"

let rockhis = " https://globoplay.globo.com/rock-in-rio-a-historia/t/rbnKN8cnXr/"
let dirty = " https://www.netflix.com/title/80169469"
let monster = " https://www.netflix.com/title/80174429"
let paralamas = " https://www.netflix.com/br/title/81410458"
let keith = " https://www.netflix.com/br/title/80066798"
let queen = " https://www.netflix.com/br/title/81274609"
let iacanga = " https://www.netflix.com/br/title/81211691"

let bohemian = " https://www.netflix.com/br/title/80994899"
let metal = " https://www.netflix.com/br/title/81207588"
let tim = " https://www.netflix.com/br/title/81380262"
let blues = " https://www.netflix.com/br/title/81100780"
let bamba = " https://www.netflix.com/br/title/281550" 