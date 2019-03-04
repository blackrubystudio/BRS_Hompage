<!--Main logo & menu bar -->
<template>
    <div class="head">
        <!--Main logo, 첫페이지로 이동 -->
        <div class="logo">
            <a href="/">
                <img class="logoimg" src="~/assets/img/blackruby.svg" alt="blackrubystudio_logo" />
            </a>
        </div>
        <!-- Header menu -->
        <div class="about">
            <a href="/about">
            about
            </a>
        </div>
        <div class="contact">
            <a href="contact">
            contact
            </a>
        </div>
    </div>
</template>

<style>
.head {
    padding-top: 7vh;
    padding-left: 5vw;
    padding-right: 5vw;
    font-family: NotoLight;
    font-size: 1.4vw;
    text-align: right;
    width: 100vw;
    top: 0;
    position: absolute;
    display: grid;
    grid-template-areas:
        'logo about'
        'logo contact';
}

.logo {
    text-align: left;
    grid-area: logo;
}
.about {
    padding-top: 1vh;
    grid-area: about;
}
.contact {
    grid-area: contact;
}

.logoimg {
    width: 6vw;
}
</style>