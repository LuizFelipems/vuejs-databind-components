Vue.use(VueMask.VueMaskPlugin);
Vue.component('form-endereco', {

    template: '<div><div class="row"><div class="col-md-3"><div class="form-group"> <label for="inputCep">CEP</label> <input type="text" class="form-control" id="inputCep" v-model="cep" v-on:keyup="buscar" v-mask="cepMask"></div></div><div class="col-md-9"></div></div><p class="text-danger" style="display: none;" v-show="naoLocalizado"><strong>Endereço não localizado</strong>. Por gentileza entre manualmente!</p><div class="row"><div class="col-md-5"><div class="form-group"> <label for="inputLogradouro">Logradouro</label> <input type="text" class="form-control" id="inputLogradouro" ref="logradouro" v-model="endereco.logradouro"></div></div><div class="col-md-2"><div class="form-group"> <label for="inputNumero">Numero</label> <input type="text" class="form-control" id="inputNumero" ref="numero"></div></div><div class="col-md-5"><div class="form-group"> <label for="inputComplemento">Complemento</label> <input type="text" class="form-control" id="inputComplemento" v-model=endereco.complemento></div></div></div><div class="row"><div class="col-md-5"><div class="form-group"> <label for="inputBairro">Bairro</label> <input type="text" class="form-control" id="inputBairro" v-model="endereco.bairro"></div></div><div class="col-md-5"><div class="form-group"> <label for="inputCidade">Cidade</label> <input type="text" class="form-control" id="inputCidade" v-model="endereco.localidade"></div></div><div class="col-md-2"><div class="form-group"> <label for="inputEstado">Estado</label> <input type="text" class="form-control" id="inputEstado" v-model="endereco.uf"></div></div></div></div>',

    data: function () {
        return {
            cep: '',
            endereco: {},
            naoLocalizado: false,
            cepMask: '#####-###'
        }
    },

    methods: {
        buscar: function () {
            var self = this;

            self.endereco = {};
            self.naoLocalizado = false;

            if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {
                jQuery.getJSON('http://viacep.com.br/ws/' + this.cep + '/json/', function (endereco) {

                    if (endereco.erro) {
                        jQuery(self.$refs.logradouro).focus();
                        self.naoLocalizado = true;
                        return;
                    }
                    self.endereco = endereco;
                    naoLocalizado = false;
                    jQuery(self.$refs.numero).focus(); // $refs armazena todas as referencias

                });
            }
        }
    }
});