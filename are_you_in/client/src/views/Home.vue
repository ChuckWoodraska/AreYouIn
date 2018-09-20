<template>
    <v-app id="inspire">
        <v-container fluid>
            <v-form ref="form" v-model="event" lazy-validation>
                <v-text-field
                        v-model="eventName"
                        label="Event Name"
                ></v-text-field>
                <date-picker v-model="time3" lang="en" type="datetime" format="[on] MM-DD-YYYY [at] hh:mm a"
                             :minute-step="10"></date-picker>
            </v-form>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Person Name"
                        required
                ></v-text-field>
                <v-checkbox
                        v-model="checkbox"
                        label="Are you in?"
                ></v-checkbox>

                <v-btn
                        :disabled="!valid"
                        @click="submit"
                >
                    submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
            <v-layout row wrap>
                <v-flex d-flex xs6 sm6 md6>
                    IN PEOPLE
                    <v-layout column align-center>

                                <v-flex d-flex v-for="user in inUsers" :key="user.name">
                                    <v-checkbox :label="user.name" v-model="user.checked"
                                    ></v-checkbox>
 <v-btn small flat icon color="red lighten-2" :id="user.name" @click="remove">
          <v-icon small dark left>remove_circle</v-icon>
 </v-btn>
                                </v-flex>

                    </v-layout>
                </v-flex>
                <v-flex d-flex xs6 sm6 md6>
                    OUT PEOPLE
                    <v-layout column>
                        <v-flex v-for="user in outUsers" :key="user.name">
                            <v-checkbox :label="user.name" v-model="user.checked"></v-checkbox>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from "@/components/HelloWorld.vue";
    import DatePicker from "vue2-datepicker";

    export default {
        data () {
            return {
                event: null,
                eventName: "",
                date1: null,
                time: null,
                users: [{name: "Chuck", checked: true}],
                valid: true,
                name: "",
                nameRules: [
                    v => !!v || "Name is required",
                    v => (v && v.length <= 10) || "Name must be less than 10 characters"
                ],
                checkbox: false,
                time3: "",
                shortcuts: [
                    {
                        text: "Today",
                        onClick: () => {
                            this.time3 = [new Date(), new Date()];
                        }
                    }
                ],
            };
        },

        methods: {
            submit () {
                this.users.push({name: this.name, checked: this.checkbox});

            },
            clear () {
                this.$refs.form.reset();
            },
            remove () {
                var index = this.users.map(x => {
                  return x.name;
                }).indexOf(id);

                this.users.splice(index, 1);
            }
        },
        name: "home",
        components: {DatePicker},
        computed: {
            inUsers: function () {
                return this.users.filter(function (user) {
                    return user.checked === true;
                });
            },
            outUsers: function () {
                return this.users.filter(function (user) {
                    return user.checked === false;
                });
            }
        }
    };
</script>
