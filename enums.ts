enum Status {
  isLoading = "loading",
  isSuccess = "success",
  isError = "error",
}

function fetchData(url: string): Status {
  return Status.isLoading;
}

console.log(fetchData("https://localhost:3000"));

function sendEvent(
  type: "checkout" | "addToCart",
  data: { productId: number },
): void;
function sendEvent(type: string, data?: unknown): void {
  console.log(
    `${type}: ${JSON.stringify(data) ?? ""}`,
  );
}

console.log(
  sendEvent("checkout", { productId: 10 }),
);
