import java.awt.*;
import javax.swing.JFrame;
import javax.swing.JTextBox;
public class Main{
     public static void main(String[] args) {
        JFrame mainFrame = new JFrame();
        mainFrame.setSize(500, 400);
        mainFrame.setBackground(Color.red);
        mainFrame.setVisible(true);
        JTextBox text = new JTextBox();
        String word = text();
        UpperCheck uc = new UpperCheck();
        uc.display(word);
    }
}