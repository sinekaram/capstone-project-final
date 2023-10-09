package com.Natwest.springbootbankingUser.Service;

import com.Natwest.springbootbankingUser.Entity.PaymentInfo;
import com.Natwest.springbootbankingUser.Repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepo paymentRepo;


    public PaymentInfo addPayment(PaymentInfo paymentInfo) {

        String referenceNumber = generateReferenceNumber();
        Date paymentDate = generatePaymentDate();
        paymentInfo.setReferenceNumber(referenceNumber);
        paymentInfo.setPaymentDate(paymentDate);

        // Save the payment details to the database
        PaymentInfo savedPayment = paymentRepo.save(paymentInfo);

        return savedPayment;
    }

    private Date generatePaymentDate() {
        Calendar calendar = Calendar.getInstance();
        Date paymentDate = calendar.getTime();
        return paymentDate;
    }

    // Add a method to generate a reference number (you can customize this logic)
    private String generateReferenceNumber() {
        // Implement your logic to generate a unique reference number here
        // Example: You can use a combination of timestamp and a random number
        // For simplicity, let's use a timestamp
        long timestamp = System.currentTimeMillis();
        return "REF-" + timestamp;
    }


    public Optional<PaymentInfo> getPaymentByEmail(String email) {
        return null;
    }
}