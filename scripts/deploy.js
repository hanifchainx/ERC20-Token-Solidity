const hre = require("hardhat");
const { ethers } = hre;


const main = async () => {
    try {
        const { ethers, network } = hre;

        const [deployer] = await ethers.getSigners();

        const { chainId } = await deployer.provider.getNetwork();

        console.log(`Network: ${network.name}(ChainId ${chainId})`);
        console.log(`Deployer: ${deployer.address}`);

        const Pdog = await ethers.getContractFactory("Pdog", deployer);
        const token = await Pdog.deploy();

        await token.waitForDeployment();

        const contractAddress = await token.getAddress();
        const DeploymentTx = token.deploymentTransaction();
        const txHash = DeploymentTx ? DeploymentTx.hash : "N/A";

        const totalSupply = await token.totalSupply();
        const totalSupplyFormated = ethers.formatUnits(totalSupply, 18);

        console.log(`Contract Address: ${contractAddress}`);
        console.log(`Deployment tx Hash: ${txHash}`);
        console.log(`Total supply: ${totalSupplyFormated} PDOG`);

    } catch (error) {
        console.error("Deployment failed:", error);
        process.exitCode = 1;

    }
}
main();