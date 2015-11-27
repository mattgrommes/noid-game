package net.mattorama;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ratpack.guice.Guice;
import ratpack.handlebars.HandlebarsModule;
import ratpack.handling.Chain;
import ratpack.handling.Context;
import ratpack.handling.Handler;
import ratpack.server.BaseDir;
import ratpack.server.RatpackServer;

import java.nio.file.Path;

import static ratpack.handlebars.Template.handlebarsTemplate;

/**
 * Created by matt on 11/21/15.
 */
public class NoidsMain {

    private final static Logger LOGGER = LoggerFactory.getLogger(NoidsMain.class);

    public static void main(String... args) throws Exception {
        RatpackServer.start(server -> server
            .registry(Guice.registry(b -> b.module(HandlebarsModule.class)))
            .serverConfig(c -> c.baseDir(BaseDir.find()))
            .handlers(chain -> chain
                .get(ctx -> ctx.render(handlebarsTemplate("index.html")))
                .get("name", new NameHandler())
                .post(ctx -> ctx.render("Hello POST"))
                .prefix("assets", nested -> nested.fileSystem("assets/", Chain::files))
            )
        );
    }
}
