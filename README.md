# Vuejs - Databind e Components

Projeto inspirado pelo projeto https://github.com/vedovelli/screencast-vue do Fabio Vedovelli.

  - Demonstração do Databind
  - Demonstração da componentização
  - Demonstração do reuso de código com components

# Adaptação para Vue.js 2

  - O Vue 2 não premite o atributo `id="vue"` no body, então passou a ser na `<div>`.
  - A propriedade `template` do componente `form-endereco`, recebeu uma `<div>` pai.
  - A diretiva `v-on="keyup:buscar"` passou a ser `v-on:keyup="buscar"`.
  - O diretiva `v-el="logradouro"` passou a ser `ref="logradouro"`.
  - O diretiva `v-el="numero"` passou a ser `ref="numero"`.
  - O diretiva `v-el="cep"` eu retirei para utilizar `v-mask="cepMask"` uma diretiva da lib vue.js https://github.com/probil/v-mask BY Max Lyashuk.
  - O método `attached: function()` foi depreciado.
