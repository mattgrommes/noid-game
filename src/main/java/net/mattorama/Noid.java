package net.mattorama;

import java.util.Calendar;
import java.util.Date;
import java.util.Random;
import java.util.stream.IntStream;

/**
 * Created by matt on 11/27/15.
 */
public class Noid {

    int[] genome;
    int age = 0;

    public Noid() {
        Random rand = new Random(Calendar.getInstance().getTimeInMillis());
        IntStream genes = rand.ints(0, 2).limit(100);
        genome = genes.toArray();
    }

    public int[] getGenome() {
        return genome;
    }

    public void setGenome(int[] genome) {
        this.genome = genome;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}

