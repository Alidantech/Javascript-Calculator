import java.awt.Color;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JButton;
public class Main{
     public static void main(String[] args) {
        JFrame mainFrame = new JFrame();
        mainFrame.setSize(500, 400);
        mainFrame.setBackground(Color.red);
        mainFrame.setVisible(true);
        JButton press = new JButton();
        press.setBounds(10, 20,10,30);
        mainFrame.add(press);
        JOptionPane.showMessageDialog(mainFrame,"hello world");
    }
}