---
outline: deep
---

# How do devices work?

Devices can be found within the Rust code of this app. As an example, we'll be using the Capellix device. Teaching you Rust is beyond this tutorial's scope. I assume you already have some amount of Rust knowledge.

Devices have 2 base traits that let the app work with them - `Device` and `DeviceCreator`. The latter handles creating the device object and setting it up to connect to the device, the former handles the day-to-day operations of the device.

The devices themselves are stored in a `Box<dyn Device>` that dynamically dispatches calls to the appropriate connected device.

## Table of Contents

[[toc]]

## The DeviceCreator trait.

To successfully create and connect to a device, the app must know how to bootstrap everything required for it to function. This may be various API handles, counters, or other related items.

```rust
pub trait DeviceCreator {
    fn new() -> Result<Self, &'static str>
    where
        Self: Sized;
    fn device_info() -> DeviceInfo
    where
        Self: Sized;
}
```

## The Device trait.

Devices must implement 4 key functions:

```rust
pub trait Device {
    fn init(&mut self) -> Result<(), &'static str>;
    fn close(&mut self) -> Result<(), &'static str>;
    fn reopen(&mut self) -> Result<(), &'static str>;
    fn send_image(&mut self, img: &[u8]) -> Result<(), &'static str>;
}
```
