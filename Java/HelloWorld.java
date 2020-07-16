
// import util.Util;

class Singleton {
  private static Singleton instance;

  private Singleton() {
  }

  public static Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}

class Person {
  static {
    System.out.println("类初始化！！");
  }
  {
    System.out.println("实例块初始化！！");
  }
  public String sex;
  public String name;
  public int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
    this.sex = "man";
    say();
  }

  static void sayHello() {
    System.out.println("Hello ,I'm Person Class");
  }

  static void changePersonName(Person p, String newName) {
    p.name = newName;
  }

  public void say() {
    System.out.println("my name is " + this.name + ", I'm " + this.age + " years old");
  }

}

class Student extends Person {
  public int grade;

  public Student(String name, int age, int grade) {
    super(name, age);
    this.grade = grade;
    // this.say();
  }

  public void say() {
    System.out.println("subclass:my name is " + this.name + ", I'm " + this.age + " years old");
  }
}

class Math {
  static int fn(int n) {
    if (n == 0) {
      return 1;
    } else if (n == 1) {
      return 4;
    } else {
      return 2 * fn(n - 1) + fn(n - 2);
    }
  }
}

public class HelloWorld {
  public static void main(String[] args) {
    // System.out.println("Hello World!");
    // char zhong = '疯';
    // int zhongValue = zhong;
    // System.out.println(zhongValue);
    // String str = "这是一首简单的小情歌";
    // System.out.println(str);

    Person p = new Person("allen", 28);
    // p.name = "allen";
    // p.age = 28;
    p.say();
    // p.sayHello();
    Person.changePersonName(p, "bob");
    p.say();

    System.out.println(p.sex);
    System.out.println(Math.fn(10));

    // System.out.println(Util.strConcat("allen", " ", "wang"));

    Student s = new Student("bob", 29, 100);

    // System.out.println()

    String[] strs = { "1", "2", "3", "4" };
    for (String str : strs) {
      System.out.println(str);
    }
  }
}
