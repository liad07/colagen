package com.company;

import java.util.Scanner;
//build by lk07
public class cocacola {
    public static Scanner reader = new Scanner(System.in);
    public static void main (String[]args) {
int num;
        int x;
        String z;
        String base="2480655";
        int max = 9999;
        int min = 1111;
        int range = max - min + 1;
        int achdot=0;int asarot=0;int meot=0;int alfim=0;
        System.out.println("how much codes you want");
        num=reader.nextInt();

        for (int i=0;num>i;i++){
           x=(int)(Math.random() * range) + min;
           if (x<5555||x<4555||x<3555||x<2555||x<1555) {
               z = (String) base + x + "5";
               System.out.println(z);


           }
              else
               achdot=x%10;
               x/=10;
               asarot=x%10;
               x/=10;
               meot=x%10;
               x/=10;
               alfim=x%10;
               x/=10;
               achdot=achdot/2;asarot=asarot/2;meot=meot/2;alfim=alfim/2;
               z = (String) base + achdot+asarot+meot+alfim+ "5";


                System.out.println(z);


        }

    }
}
