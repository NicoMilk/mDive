import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { Card } from "./Card";
import { useForm, Controller } from "react-hook-form";
import { ThemedText } from "@/components/ThemedText";
import { useFetchMutation } from "../hooks/useFetch";

const apiUrl = process.env.EXPO_PUBLIC_DIVELOG_API_URL;

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useFetchMutation("/login");

  const onSubmit = (credentials: any) => {
    const formData = new FormData(); // Added FormData initialization
    formData.append("user", credentials.username); // Added user field
    formData.append("pass", credentials.password); // Added pass field
    mutate(formData);
  };

  return (
    <Card style={styles.body}>
      <ThemedText variant="subtitle1" color="eigengrau" style={styles.title}>
        Login to Divelogs.de
      </ThemedText>
      <View>
        <Controller
          control={control}
          name="username"
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: errors.username
                    ? "red"
                    : styles.input.borderColor,
                },
              ]}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Username"
            />
          )}
        />
        {/* {errors.username && <Text>This field is required.</Text>} */}

        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: errors.password
                    ? "red"
                    : styles.input.borderColor,
                },
              ]}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Password"
              secureTextEntry
            />
          )}
        />
        {/* {errors.password && <Text>This field is required.</Text>} */}
        <Pressable style={styles.buttonSubmit} onPress={handleSubmit(onSubmit)}>
          <ThemedText variant="subtitle1" color="white">
            Go !
          </ThemedText>
        </Pressable>
      </View>
    </Card>
  );
};
export default LoginForm;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#346ba0",
    width: 300,
    height: 40,
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonSubmit: {
    backgroundColor: "#346ba0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
    width: 300,
    height: 40,
    elevation: 0,
  },
});
