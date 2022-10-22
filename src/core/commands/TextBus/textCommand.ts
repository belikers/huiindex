import { CommandType } from "../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * 文本编辑器命令
 * @author hjh
 */
const textCommand: CommandType = {
  func: "text",
  name: "在线文本编辑器",
  options: [],
  collapsible: true,
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./TextbusBox.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default textCommand;
