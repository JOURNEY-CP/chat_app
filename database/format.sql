CREATE DATABASE chat_app;
USE chat_app;

CREATE TABLE money_account(
    id varchar(32) NOT NULL COMMENT "Account number",
    user_id varchar(32) NOT NULL COMMENT "Linking user",
    balance integer NOT NULL DEFAULT 0  COMMENT "Account balance",
    pin varchar(256) NOT NULL DEFAULT "nopassword" COMMENT "Pin in encryption",
    PRIMARY KEY(id)
);

CREATE TABLE money_transaction(
    id varchar(32) NOT NULL COMMENT "Transaction Id",
    acc_id_from varchar(32) NOT NULL COMMENT "Linking account of person who initiated transaction",
    acc_id_to varchar(32) NOT NULL COMMENT "Linking account of person who is beneficiary of transaction",
    trans_time timestamp NOT NULL DEFAULT now() COMMENT "Time when transaction occurs",
    amount int(10) NOT NULL DEFAULT 0 COMMENT "Amount of transaction",
    reason varchar(256) NOT NULL COMMENT "reason",
    FOREIGN KEY (acc_id_from) REFERENCES money_account(id),
    FOREIGN KEY (acc_id_to) REFERENCES money_account(id),
    PRIMARY KEY(id)
);