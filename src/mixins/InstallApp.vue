<script>
    export default {
        name: "InstallApp",
        data() {
            return {
                deferredPromptData: null
            }
        },
        methods: {
            installApp() {
                this.deferredPrompt.prompt();
                this.deferredPrompt.userChoice
                    .then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            this.deferredPromptData = null;
                        }
                    });
            },
            initInstallApp() {
                window.addEventListener('beforeinstallprompt', (e) => {
                    e.preventDefault();
                    this.deferredPrompt = e;
                });
            }
        },
        computed: {
            deferredPrompt: {
                get() {
                    return this.deferredPromptData;
                },
                set(value) {
                    this.deferredPromptData = value;
                }
            }
        }
    }
</script>