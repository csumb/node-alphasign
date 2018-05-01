# Node Alphasign

Did you google "control old Alphasign 330 with node"? If so, **you are at the right place**.

This is a quick, dirty, and embarassing project to hook a slack channel with a lazy 5 second timeout to an old Alphasign color LCD display using a **serial port**.

It required reading [this huge PDF](http://alumni.media.mit.edu/~aggelos/papers/alphasign.pdf).

To configure, change the values of `config.json` to match your slack channel ID and token. You might need to change the port in lib/bigboard. If so, I apologize.

![Sign reading We spent way too much time on this](https://csumb.github.io/toomuch.gif)
