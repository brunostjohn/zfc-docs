---
outline: deep
---

# The Device trait.

Devices must implement 4 key functions:

```rust
pub trait Device {
    fn init(&mut self) -> Result<(), &'static str>;
    fn close(&mut self) -> Result<(), &'static str>;
    fn reopen(&mut self) -> Result<(), &'static str>;
    fn send_image(&mut self, img: &[u8]) -> Result<(), &'static str>;
}
```

## Table of Contents

[[toc]]

## Initialising the device

```rust
pub trait Device {
    fn init(&mut self) -> Result<(), &'static str>; // [!code focus]
    fn close(&mut self) -> Result<(), &'static str>;
    fn reopen(&mut self) -> Result<(), &'static str>;
    fn send_image(&mut self, img: &[u8]) -> Result<(), &'static str>;
}
```

To work, many devices require some sort of initialisation packet or signal. This function will be ran by the renderer thread before it sends any frames to the device and whenever it disconnects.

## Closing the device

```rust
pub trait Device {
    fn init(&mut self) -> Result<(), &'static str>;
    fn close(&mut self) -> Result<(), &'static str>; // [!code focus]
    fn reopen(&mut self) -> Result<(), &'static str>;
    fn send_image(&mut self, img: &[u8]) -> Result<(), &'static str>;
}
```

To shut down gracefully, devices may require some packet sent to them that informs them that they should come back to hardware mode (one wherein a computer is not sending any information to it). This function will be ran by the renderer when the app exits.

## Reopening the device

```rust
pub trait Device {
    fn init(&mut self) -> Result<(), &'static str>;
    fn close(&mut self) -> Result<(), &'static str>;
    fn reopen(&mut self) -> Result<(), &'static str>; // [!code focus]
    fn send_image(&mut self, img: &[u8]) -> Result<(), &'static str>;
}
```

Sometimes due to undefined instabilities, your device may disconnect from the app. You should implement a function that gracefully reconnects it to the app and re-prepares it for frames.

## Sending frames

```rust
pub trait Device {
    fn init(&mut self) -> Result<(), &'static str>;
    fn close(&mut self) -> Result<(), &'static str>;
    fn reopen(&mut self) -> Result<(), &'static str>;
    fn send_image(&mut self, img: &[u8]) -> Result<(), &'static str>; // [!code focus]
}
```

This function actually sends frames to the device. The img argument is the current frame in RGBA format. If your device (like the Capellix), requires JPEGs. You'll need to compress the image.
