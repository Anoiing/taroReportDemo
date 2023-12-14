import { Input, View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const inputOnBlur = (e) => {
    console.log(e, "----onblur");
  };

  const inputOnFocus = (e) => {
    console.log(e, "----onfocus");
  };

  const inputOnChange = (e) => {
    console.log(e, "----onchange");
  };

  return (
    <View className="view">
      <Input
        name="input"
        className="input"
        placeholder="这里是input框"
        onBlur={inputOnBlur}
        onFocus={inputOnFocus}
        onInput={inputOnChange}
      />
    </View>
  );
}
