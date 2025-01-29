import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ReadurlData {
    public static void main(String []args) {
        String urlstring = "http://localhost:8080//angelone/auth/callback/";

        try {
            URL url = new URL(urlstring);

            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()))){
                String inputLine;
                StringBuilder content = new StringBuilder();

                while((inputLine = in.readLine()) != null) {
                    content.append(inputLine);
                }
                System.out.println(content.toString());
            }

            connection.disconnect();
        }catch(Exception e) {
            e.printStackTrace();
        }
    }
}