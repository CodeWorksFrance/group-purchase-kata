<template>
  <v-form v-model="isFormValid" ref="orderItemForm">
    <v-text-field
      v-model="item.label"
      :rules="[requiredRule]"
      label="Produit"
      variant="underlined"
    />
    <v-text-field
      v-model="item.quantity"
      :rules="[requiredRule, minRule]"
      label="Quantité"
      type="number"
      min="0"
      variant="underlined"
    />
    <v-text-field
      v-model="item.unitPrice"
      :rules="[requiredRule, minRule]"
      label="Prix"
      type="number"
      min="0"
      step="0.01"
      variant="underlined"
      append-inner-icon="mdi-currency-eur"
    />
    <v-text-field
      v-model="item.buyer.name"
      :rules="[requiredRule]"
      label="Acheteur"
      variant="underlined"
    />
    <br />
    <v-btn color="success" class="mr-4" @click="validate"> Validate </v-btn>
    <v-btn color="warning" @click="reset"> Annuler </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "OrderItemForm",
  data: () => {
    return {
      isFormValid: false,
      item: {
        label: "",
        quantity: undefined,
        unitPrice: undefined,
        buyer: {
          name: "",
          birthDate: "",
        },
      },
      requiredRule: (v) => !!v || "Ce champs est requis",
      minRule: (v) => v > 0 || "La valeur doit etre supérieur à 0",
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.orderItemForm.validate();

      if (valid) {
        this.$emit("on-submit", JSON.parse(JSON.stringify(this.item)));
        this.reset();
      }
    },
    reset() {
      this.$refs.orderItemForm.reset();
    },
  },
};
</script>

<style scoped></style>
