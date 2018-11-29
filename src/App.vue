<template>
    <v-app>
        <main>
            <v-card
                    class="mx-auto"
                    max-width="600">
                <v-toolbar card dense>
                    <v-toolbar-title>
                        <span class="subheading">PITT-FAKK</span>
                    </v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-layout justify-space-between mb-3>
                        <v-flex text-xs-left xs5>
                            <span class="display-3 font-weight-light" v-text="bpm"></span>
                            <span class="subheading font-weight-light mr-1">BPM</span>
                        </v-flex>
                        <v-flex xs2 text-xs-center>
                            <img width="90px" src="img/pitt-bodybuilding-bizeps.png">
                        </v-flex>
                        <v-flex text-xs-right xs5>
                            <v-btn
                                    :color="color"
                                    dark
                                    depressed
                                    fab
                                    @click="toggle">
                                <v-icon large>
                                    {{ isPlaying ? 'pause' : 'play_arrow' }}
                                </v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>

                    <v-slider
                            v-model="bpm"
                            :color="color"
                            always-dirty
                            min="20"
                            max="120">
                        <v-icon
                                large
                                class="icon-minus"
                                slot="prepend"
                                :color="color"
                                @click="decrement">
                            remove
                        </v-icon>

                        <v-icon
                                large
                                class="icon-plus"
                                slot="append"
                                :color="color"
                                @click="increment">
                            add
                        </v-icon>
                    </v-slider>
                </v-card-text>
            </v-card>

            <div v-if="deferredPrompt" style="margin-top: 10px" class="text-xs-right">
                <v-btn v-on:click.native="installApp" :color="color">Install App</v-btn>
            </div>

        </main>
    </v-app>
</template>

<script>

    import InstallApp from "@/mixins/InstallApp"

    export default {
        name: 'home',
        mixins: [
            InstallApp
        ],
        data: () => ({
            bpm: 80,
            isPlaying: false,
            audio: new Audio(require('./assets/metronome.wav')),
            refreshIntervalId: null
        }),
        watch: {
            bpm: function (val) {
                this.resetInterval();
            }
        },
        computed: {
            color() {
                return 'red'
            },
        },
        methods: {
            decrement() {
                this.bpm--;
            },
            increment() {
                this.bpm++;
            },
            toggle() {
                this.isPlaying = !this.isPlaying;

                if (this.isPlaying) {
                    this.startInterval();
                } else {
                    clearInterval(this.refreshIntervalId);
                }
            },
            playSound() {
                this.audio.play()
            },
            startInterval() {
                this.refreshIntervalId = setInterval(() => {
                    this.playSound();
                }, 1000 / (this.bpm / 60));
            },
            resetInterval() {
                if (!this.isPlaying) {
                    return;
                }
                clearInterval(this.refreshIntervalId);
                this.startInterval();
            }
        },
        created() {
            this.initInstallApp();
        },
        mounted() {
            const self = this;
            window.onblur = function() {
                self.isPlaying = false;
                clearInterval(self.refreshIntervalId);
            }
        }
    }
</script>

<style lang="scss">
    @keyframes metronome-example {
        from {
            transform: scale(.5);
        }

        to {
            transform: scale(1);
        }
    }

    .v-avatar--metronome {
        animation-name: metronome-example;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    .v-slider__thumb {
        width: 36px !important;
        height: 36px !important;
        left: -18px !important;
    }
    .v-slider {
        height: 42px !important;
    }

    .icon-minus {
        margin-right: 10px;
    }

    .icon-plus {
        margin-left: 10px;
    }

</style>
