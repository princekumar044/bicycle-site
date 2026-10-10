// Buyer info store (local storage only, no API)
export const asyncBuyerInfoStore = (data) => (dispatch) => {
  try {
    // Store buyer info in local storage
    const buyerData = {
      id: Date.now(),
      ...data,
    };
    localStorage.setItem("buyer", JSON.stringify(buyerData));
    console.log("Buyer info stored locally:", buyerData);
  } catch (err) {
    console.log("Storage error:", err);
  }
};
