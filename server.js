function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const environment = process.env.SUPER_VARIABLE || "Running Locally"

async function main() {
  while(true) {
    console.log(`Containers rule! And the Variable is ${environment}`);
    await sleep(5000);
  }
}

main();
