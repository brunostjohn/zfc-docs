---
outline: deep
---

# Creating the Device struct

```rust
pub trait DeviceCreator {
    fn new() -> Result<Self, &'static str> // [!code focus]
    where
        Self: Sized;
    fn device_info() -> DeviceInfo
    where
        Self: Sized;
}
```

Let me explain this by using the Capellix device as an example. To function, the Capellix device requires a handle to `HidApi` and a handle to the device itself. On top of that, memory is pre-allocated for packets etc. to lower heap allocation overhead together with other things that are important for it to function correctly.

This is what we need to bootstrap:

```rust
pub struct Capellix<'a> {
    pub device: Option<HidDevice>,
    api: HidApi,
    unfuck_counter: EventTicker,
    compressor: turbojpeg::Compressor,
    image_frame: turbojpeg::Image<&'a [u8]>,
    compression_buffer: OutputBuf<'a>,
    packet: Vec<u8>,
}
```

Let's start by creating a skeleton for the DeviceCreator trait.

```rust
impl<'a> DeviceCreator for Capellix<'a> {
    fn new() -> Result<Capellix<'a>, &'static str> {

    }

    fn device_info() -> DeviceInfo
    where
        Self: Sized,
    {

    }
}
```

Inside of these functions we will need to do all the operations required to set up our device and return an error in case it doesn't work out. Return an error if your device cannot be found.

The `DeviceInfo` struct needs to be returned with all the information below. I think it's fairly self explanatory.

```rust
pub struct DeviceInfo {
    pub name: String,
    pub manufacturer: String,
    pub conflicting_processes: Vec<String>,
}
```
