<template>
    <div>
        <v-card
                class="mx-auto"
                max-width="600">
            <v-toolbar card dense>
                <v-toolbar-title>
                    <span class="subheading">P.I.T.T.-FORCE</span>
                </v-toolbar-title>
                <!--<v-spacer></v-spacer>-->
                <!--<v-btn icon>-->
                <!--<v-icon>share</v-icon>-->
                <!--</v-btn>-->
            </v-toolbar>

            <v-card-text>
                <v-layout justify-space-between mb-3>
                    <v-flex text-xs-left>
                        <span class="display-3 font-weight-light" v-text="bpm"></span>
                        <span class="subheading font-weight-light mr-1">BPM</span>
                        <v-fade-transition>
                            <v-avatar
                                    v-if="isPlaying"
                                    :color="color"
                                    :style="{ animationDuration: animationDuration }"
                                    class="mb-1 v-avatar--metronome"
                                    size="12">
                            </v-avatar>
                        </v-fade-transition>
                    </v-flex>
                    <v-flex text-xs-right>
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
                            slot="prepend"
                            :color="color"
                            @click="decrement">
                        remove
                    </v-icon>

                    <v-icon
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

    </div>
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
            audio: new Audio('/metronome.wav'),
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
            animationDuration() {
                return `${60 / this.bpm}s`
            }
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
                if(!this.isPlaying) {
                    return;
                }
                clearInterval(this.refreshIntervalId);
                this.startInterval();
            }
        },
        created() {
            this.initApp();
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
</style>
