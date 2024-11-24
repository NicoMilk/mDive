import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";
import * as SecureStore from "expo-secure-store";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const apiUrl = process.env.EXPO_PUBLIC_DIVELOG_API_URL;

// Create a JSON storage wrapper for SecureStore
const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};
// Create a Jotai atom for the bearer token
export const bearerTokenAtom = atomWithStorage(
  "bearer_token",
  null, // Initial value
  createJSONStorage(() => secureStorage)
);

export const useFetchMutation = (endpoint: string) => {
  const [, setBearerToken] = useAtom(bearerTokenAtom);
  return useMutation({
    mutationFn: async (body: FormData) => {
      const response = await fetch(apiUrl + endpoint, {
        method: "POST",
        body: body, // formData
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json();
    },
    onSuccess: async (data) => {
      try {
        await SecureStore.setItemAsync("bearer_token", data.bearer_token);
        setBearerToken(data.bearer_token);
      } catch (error) {
        console.error("Error storing token:", error);
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      alert(`Login error : ${error}`);
    },
  });
};

// TODO: type body
export const useFetchQuery = (endpoint: string, body?: any) => {
  const bearerToken = useAtomValue(bearerTokenAtom);
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const response = await fetch(apiUrl + endpoint, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
        body,
      });
      return response.json();
    },
  });
};
