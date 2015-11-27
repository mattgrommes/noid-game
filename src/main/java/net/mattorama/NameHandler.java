package net.mattorama;

import ratpack.handling.Context;
import ratpack.handling.Handler;

import static ratpack.jackson.Jackson.json;

/**
 * Created by matt on 11/25/15.
 */
public class NameHandler implements Handler {
    @Override
    public void handle(Context ctx) throws Exception {
        ctx.render(json(new Name("jimmy")));
    }

    class Name {
        String name;

        public Name(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
