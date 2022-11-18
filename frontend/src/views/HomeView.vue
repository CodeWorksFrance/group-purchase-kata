<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="4" md="5" sm="12" xs="12">
        <h3>Ajouter un achat</h3>
        <OrderItemForm @on-submit="addItem" />
      </v-col>
      <v-col cols="12" lg="7" md="6" offset-md="1" sm="12">
        <h3>Liste d'achat</h3>
        <v-table>
          <thead>
            <tr>
              <th v-for="(header, index) in headers" :key="index">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody v-if="items">
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.label }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.unitPrice }}</td>
              <td>{{ item.buyer.name }}</td>
            </tr>
          </tbody>
        </v-table>
        <br />
        <v-form>
          <v-text-field
            type="number"
            label="Frais de port"
            variant="underlined"
            min="0"
            step="0.01"
            append-inner-icon="mdi-currency-eur"
          />
          <v-text-field type="date" variant="underlined" label="Date" />
          <v-btn color="success" block>Générer la facture</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useOrderStore } from "../stores/order";
import OrderItemForm from "../components/OrderItemForm.vue";

const headers = ref(["Produit", "quantité", "Prix u.", "Acheteur"]);
const store = useOrderStore();
const items = store.items;
const addItem = store.addItem;
// const date = store.date
</script>
