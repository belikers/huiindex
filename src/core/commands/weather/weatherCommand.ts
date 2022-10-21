import { CommandType } from "../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * 查看现在天气
 * @author hjh
 */
const weatherCommand: CommandType = {
  func: "weather",
  name: "weather",
  desc: "查看现在天气",
  alias: ["nw"],
  collapsible: true,
  options: [],
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./weatherBox.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default weatherCommand;
