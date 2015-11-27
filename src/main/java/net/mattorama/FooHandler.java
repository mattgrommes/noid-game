package net.mattorama;

import ratpack.handling.Context;
import ratpack.handling.Handler;
import ratpack.server.BaseDir;

public class FooHandler implements Handler {
    public void handle(Context context) {
        System.out.println(BaseDir.find());
        context.getResponse().send("foo");
    }
}
