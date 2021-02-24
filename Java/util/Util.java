package util;

public class Util {
  public static String strConcat(String... strs) {
    String newStr = "";
    for (String str : strs) {
      newStr = newStr + str;
    }
    return newStr;
  }
}