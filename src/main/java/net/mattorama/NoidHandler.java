package net.mattorama;

import ratpack.handling.Context;
import ratpack.handling.Handler;

import static ratpack.jackson.Jackson.json;

/**
 * Created by matt on 11/27/15.
 */
public class NoidHandler implements Handler {

    @Override
    public void handle(Context ctx) throws Exception {
        Noid n = new Noid();

        ctx.render(json(n));
    }
}
