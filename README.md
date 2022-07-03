# speedkeeper2
Temporary audio fix for Ryzen-based Hackintosh systems.
*Inspired from the original speedkeeper https://github.com/astrihale/speedkeeper, but works better in my configuration.*

## What is this ?
Ryzen-based hackintosh systems used to have laggy and crackling audio on macOS.
This is a sort of temporary fix.

## How does this one works ?
The original Speedkeeper keeps doing 1+1 in the background, but it's not enough for the CPU to sync correctly.
I noticed that something as simple as moving my cursor fixes the issue, so i made a visual trick.
The white color of the tray icon flickers every 5ms with a very slightly different white, and it does the job !

![How it looks in the tray !(it's on the left)](https://i.ibb.co/rypCJbr/Capture-d-cran-2022-02-24-22-39-42.png)
