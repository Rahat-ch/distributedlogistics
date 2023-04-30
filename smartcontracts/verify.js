const { exec } = require('node:child_process')

// run the `ls` command using exec
exec(`npx hardhat verify --network mumbai 0xfB9DBf1030De5cc6D76B70986ddAa7373f22569D 0x322Af0da66D00be980C7aa006377FCaaEee3BDFD  0xd2f8ed343386FB042178c7e133A837CB8043d0dc "123 imaginary lane" "123 other imaginary lane" ${[0x9,0x9]}`, (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})