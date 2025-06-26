async function generateHash() {
  const input = document.getElementById("inputData").value;

  if (!input) {
    document.getElementById("outputHash").innerText = "Please enter some data.";
    return;
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(input);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  document.getElementById("outputHash").innerText = hashHex;
}
