---
outline: deep
---

# Reverse engineering devices

Unfortunately, manufacturers usually aren't too happy to provide packet specifications for their devices. Because of that, to add a device, one needs to reverse engineer how it communicates with the manufacturer's app.

## How do I capture communications?

A lot of these devices (like the Capellix, Thermaltake, or Kraken) communicate over USB. [Wireshark](https://www.wireshark.org/) is a great tool for sniffing such communications and provides a mature toolset for finding out how devices talk to the computer.

To start capturing USB packets, open up Wireshark and click on USBpcap on the bottom bar.

![Wireshark welcome window](/assets/img/wireshark.png)

You'll notice that data has started being captured. It will look similar to this.

![Data being captured](/assets/img/capturing.png)

Once you feel you've got enough, press the stop button in the top left and you'll have a bunch of packets. Usually, image packets will be some of the largest ones so we can just sort by size (referred to as length by Wireshark).

![Packets sorted by size](/assets/img/sorted.png)

To no one's surprise, we have some massive packets here. From here on out, you should filter packets by destination and then sort by time again.

![Selecting filter](/assets/img/filter.png)

Now, we've got something going. We can see packets in the order they were sent and start thinking. From here on out, you'll have to be creative and just sort of trace it back. It's always worth trying out various options directly inside of the app and seeing how they work out. There is no single process for doing this but it's definitely possible. It's hard for me to say what exactly you should do, but with enough perseverance it's not impossible to figure this out.
