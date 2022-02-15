<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list class="py-0">
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="handleTaskEvent(i)"
            class="px-3"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <dialog-delete
      v-if="dialogs.showDelete"
      :task="task"
      @close="dialogs.showDelete = false"
    />
    <dialog-edit
      v-if="dialogs.showEdit"
      :task="task"
      @close="dialogs.showEdit = false"
    />
    <dialog-due-date
      v-if="dialogs.showDueDate"
      :task="task"
      @close="dialogs.showDueDate = false"
    />
  </div>
</template>

<script>
import DialogDelete from "./Dialogs/DialogDelete.vue";
import DialogEdit from "./Dialogs/DialogEdit.vue";
import DialogDueDate from "../todo/Dialogs/DialogDueDate.vue";
export default {
  name: "TaskMenu",
  components: {
    "dialog-delete": DialogDelete,
    "dialog-edit": DialogEdit,
    "dialog-due-date": DialogDueDate,
  },
  data: () => ({
    dialogs: {
      showDelete: false,
      showEdit: false,
      showDueDate: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-clipboard-edit-outline",
        taskEvent() {
          this.dialogs.showEdit = true;
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar",
        taskEvent() {
          this.dialogs.showDueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete-outline",
        taskEvent() {
          // Note: the this keyword refers to this object and not the TaskMenu component. The handleTaskEvent method fixes that.
          this.dialogs.showDelete = true;
        },
      },
      {
        title: "Sort",
        icon: "mdi-arrow-vertical-lock",
        taskEvent() {
          this.$store.dispatch("toggleSorting");
        },
      },
    ],
    closeOnClick: true,
  }),
  methods: {
    handleTaskEvent(i) {
      // The call function is used here to make sure the this keyword refers to this component.
      this.items[i].taskEvent.call(this, i);
    },
  },
  props: ["task"],
};
</script>

<style lang="scss">
.v-list-item__icon {
  margin-right: 0.6rem !important;
}
</style>