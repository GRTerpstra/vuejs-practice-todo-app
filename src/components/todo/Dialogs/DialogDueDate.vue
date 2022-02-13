<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="dueDate" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="editDueDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogDueDate",
  props: ["task"],
  data() {
    return {
      dueDate: this.task.dueDate,
    };
  },
  computed: {
    dueDateValid() {
      console.log(this.dueDate)
      console.log(this.task.dueDate)
      return this.dueDate != this.task.dueDate;
    },
  },
  mounted() {
    if (this.task.dueDate != null) {
      this.dueDate = this.task.dueDate;
    }
  },
  methods: {
    editDueDate() {
      if (this.dueDateValid) {
        let payload = {
          id: this.task.id,
          dueDate: this.dueDate,
        };
        this.$store.dispatch("editDueDate", payload);
      }
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>